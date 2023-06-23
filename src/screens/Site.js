import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
//Exibe a pagina web no app
export default function Site() {
  return (
    <WebView
        source={{ uri: 'https://servtecconversor.000webhostapp.com/' }}
      />
  )
}