import React from 'react';

const Givesupport = () => (
  <div className="instructionContainer">
    <div className="leftContent">
      <div className="givesupport">
        <p>
          Get the support you need. From multiple organisations. In minutes.
        </p>
      </div>
      <div className="supportpara">
        <p>
          Millions of us have support needs. Like getting our statements in
          Braille. Being given more time to complete tasks. Or using a British
          Sign Language interpreter.
        </p>
        <p>
          Support Hub will help you tell multiple organisations about your
          support needs. Saving you time. Making everyday life easier. Free to
          use, forever.
        </p>
        <p>
          Support Hub is in beta. All features work but there could be areas you
          think could be improved. We'd like to hear your thoughts on how to
          improve and you will be able to provide feedback.
        </p>
      </div>
    </div>
    <div className="rightContent">
      <div className="rightImage">
        <div className="imageContent">
          <p>
            Share your support needs with multiple organisations in 3 simple
            steps:
            <hr />
            <ol>
              <li>Select your support needs</li>
              <li>Set up your account</li>
              <li>Share with organisations</li>
            </ol>
          </p>
        </div>
      </div>
      <div className="redirectionContainer">
        <button id="supportBtn">Learn how Support Hub works</button>
        <button id="loginBtn">Let's get you started</button>
        <div>
          Already have a Support Hub account?
          <a href="#">Login</a>
        </div>
      </div>
    </div>
  </div>
);

export default Givesupport;
