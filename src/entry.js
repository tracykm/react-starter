import React from "react";
import ReactDOM from "react-dom";

const Hello = React.createClass({
 render: function() {
   return (
     <div>
         Hello, {this.props.name}!
     </div>
   );
 },
});

ReactDOM.render(
  <Hello name="World" />,
  document.body
);
