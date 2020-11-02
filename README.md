***
# NOTICE:

## This repository has been archived and is not supported.

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
***

React Native Image Progress Bar
===============================

An image based react-native progress bar:

![Preview](./images/progress.png)

And sample sample code:

```
var ProgressBar = require('react-native-image-progressbar');
```

Then:

```
<ProgressBar
  source={require('image!flowers')}
  width={300}
  height={30}
  percent={75}
  style={[{
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#aaa'
  }, this.props.style]}>
  <Text style={{
    textAlign: 'center',
    color: 'white',
    width: 300,
    height: 30,
    paddingTop: 5,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  }}>75%</Text>
</ProgressBar>
```

## Installation

```
npm install react-native-image-progressbar --save
```
