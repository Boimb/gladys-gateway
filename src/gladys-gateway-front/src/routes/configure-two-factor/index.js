import { Component } from 'preact';
import Auth from '../../api/Auth';
import ConfigureTwoFactorForm from './ConfigureTwoFactorForm';
import QRCode from 'qrcode';

class ConfigureTwoFactorPage extends Component {
  state = {
    dataUrl: null,
    twoFactorCode: '',
    step: 1
  };

  getOtpAuthUrl = () => {
    const accessToken = Auth.getAccessToken();
    Auth.configureTwoFactor(accessToken).then(data => {
      QRCode.toDataURL(data.otpauth_url, (err, dataUrl) => {
        this.setState({ dataUrl });
      });
    });
  };

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  };

  updateTwoFactorCode = event => {
    let newValue = event.target.value;

    // we add a space between the two group of 3 digits code
    // so it's more readable
    if (newValue.length === 3) {
      if (newValue.length > this.state.twoFactorCode.length) {
        newValue += ' ';
      } else {
        newValue = newValue.substr(0, newValue.length - 1);
      }
    }
    this.setState({ twoFactorCode: newValue });
  };

  componentWillMount = () => {
    this.getOtpAuthUrl();
  };

  render({}, { dataUrl, step, twoFactorCode }) {
    return (
      <ConfigureTwoFactorForm
        dataUrl={dataUrl}
        nextStep={this.nextStep}
        twoFactorCode={twoFactorCode}
        updateTwoFactorCode={this.updateTwoFactorCode}
        step={step}
      />
    );
  }
}

export default ConfigureTwoFactorPage;
