import React, { useRef, useEffect } from 'react';
import { SafeAreaView, StyleSheet, BackHandler, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Print from 'expo-print';

export default function App() {
  const webviewRef = useRef<WebView>(null);
  const url = process.env.EXPO_PUBLIC_URL;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (webviewRef.current) {
        webviewRef.current.goBack();
        return true;
      }
      return false;
    });
    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webviewRef}
        source={{ uri: `${url}` }}
        style={{ flex: 1 }}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});