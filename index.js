'use strict';

var { CroppedImage } = require('react-native-cropping');

var React = require('react-native');
var {
  Text,
  View,
  Image
} = React;

var ProgressBar = React.createClass({
  propTypes: {
    height: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
    percent: React.PropTypes.number.isRequired
  },
  getDefaultProps() {
    return {
      backgroundOpacity: 0.2,
      resizeMode: 'contain'
    }
  },
  render() {
    return (
      <View style={[{
        overflow: 'hidden',
        height: this.props.height,
        width: this.props.width,
        padding: 0,
        margin: 0
      }, this.props.style]}>
        <Image
          source={this.props.source}
          resizeMode={this.props.resizeMode}
          style={[{
            height: this.props.height,
            width: this.props.width,
            position: 'absolute',
            top: -1,
            left: 0,
            margin: 0,
            padding: 0,
            opacity: this.props.backgroundOpacity
          }]}>
        </Image>
        <CroppedImage
          source={this.props.source}
          resizeMode={this.props.resizeMode}
          cropTop={0}
          cropLeft={0}
          cropHeight={this.props.height}
          cropWidth={this.props.width * (this.props.percent / 100.0)}
          width={this.props.width}
          height={this.props.height}
          style={[{
            position: 'absolute',
            margin: 0,
            padding: 0,
            top: -1,
            left: 0
          }]}>
        </CroppedImage>
        {this.props.children}
      </View>
    );
  }
});

module.exports = ProgressBar;
