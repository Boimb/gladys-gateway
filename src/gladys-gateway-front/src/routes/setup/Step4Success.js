import style from './style.css';

const Step4Success = ({ children, ...props }) => (
  <div class="card">
    <div class="card-body">
      <div class={'row ' + style.equal}>
        <div class="col-md">
          <img src="/assets/images/pierre-gilles-bali.jpg" />
        </div>
        <div class="col-md" style={{ height: '100%' }}>
          <div class="d-flex flex-column">
            <h4>Let me say you thank you 🙏</h4>
            <p class="text">
              Thank you for supporting open-source and making this project possible 🙌
            </p>
            <p class="text">I worked really hard every day to make this Gateway possible.</p>
            <p class="text">I can't wait to see what you are going to build with Gladys!</p>
            <p class="text">Happy hacking,</p>
            <p class="text">
              Pierre-Gilles Leymarie
              <br />
              Find me on <a href="">Twitter</a> 😉
            </p>
          </div>
          <div class="text-right align-items-end">
            <button type="submit" class="btn btn-primary">
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Step4Success;
