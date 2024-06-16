import { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: "1px",
      borderStyle: "solid",
      fontWeight: "bold",
      borderRadius: "12px",
      borderColor: this.color,
      textAlign: "center",
      fontSize: "14px",
      margin: "15px 0",
      padding: "15px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "rgb(0, 0, 255)";
    this.bgColor = "rgb(220, 220, 255)";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "black";
    this.bgColor = "#F08080";
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "black";
    this.bgColor = "#F08080";
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };
