import {Platform} from 'react-native';

const params = {
    server:{
        host: '0.0.0.0',
        port: 3004,
        platform: Platform.OS,
        get url(){ return 'http://' + this.host + ':' + this.port }
    },
  }
  
  module.exports = params