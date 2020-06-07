const React = require("react");

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      data-name="BMC-Widget"
      src="https://cdn.buymeacoffee.com/widget/1.0.0/prod/widget.prod.min.js"
      data-id="jimclyde"
      data-description="Buy me a coffee?"
      data-message="Thank you for visiting. You can now buy me a coffee!"
      data-color="#5F7FFF"
      data-position="right"
      data-x_margin="25"
      data-y_margin="25"
    ></script>
  ]);
};