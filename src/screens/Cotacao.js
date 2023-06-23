import {Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Stack, TextInput } from '@react-native-material/core';
import { StatusBar  } from 'expo-status-bar';

export default function Cotacao() {
  //Criar estado da aplicação
  const [bitcoinCompra, onChangeBitcoinCompra] = useState('');
  const [bitcoinVariacao, onChangeBitcoinVariacao] = useState('');

  const [dolarCompra, onChangeDolarCompra] = useState('');
  const [dolarVariacao, onChangeDolarVariacao] = useState('');

  const [euroCompra, onChangeEuroCompra] = useState('');
  const [euroVariacao, onChangeEuroVariacao] = useState('');

  const [pesoCompra, onChangePesoCompra] = useState('');
  const [pesoVariacao, onChangePesoVariacao] = useState('');
      //Ciclos de vida das chamadas da api
      useEffect(() => {
        cotacaoBitcoin();
        cotacaoDolar();
        cotacaoEuro();
        cotacaoPeso();
      }, []);
      //Funções que consomem dados da api awesome
      cotacaoBitcoin = async () => {
        await fetch("http://economia.awesomeapi.com.br/json/last/BTC-BRL")
        .then( (res) => res.json() )
        .then( (res) => {
          onChangeBitcoinCompra(res.BTCBRL['bid'])
          onChangeBitcoinVariacao(res.BTCBRL['varBid'])
        })
        .catch((error) => console.error(error))
      }
      cotacaoDolar = () => {
        fetch("http://economia.awesomeapi.com.br/json/last/USD-BRL")
        .then( (res) => res.json() )
        .then( (res) => {
          onChangeDolarCompra(res.USDBRL['bid'])
          onChangeDolarVariacao(res.USDBRL['varBid'])
        })
        .catch((error) => console.error(error))
      }
      cotacaoEuro = () => {
        fetch("http://economia.awesomeapi.com.br/json/last/EUR-BRL")
        .then( (res) => res.json() )
        .then( (res) => {
          onChangeEuroCompra(res.EURBRL['bid'])
          onChangeEuroVariacao(res.EURBRL['varBid'])
        })
        .catch((error) => console.error(error))
      }
      cotacaoPeso = () => {
        fetch("http://economia.awesomeapi.com.br/json/last/ARS-BRL")
        .then( (res) => res.json() )
        .then( (res) => {
          onChangePesoCompra(res.ARSBRL['bid'])
          onChangePesoVariacao(res.ARSBRL['varBid'])
        })
        .catch((error) => console.error(error))
      }
  return (
    <Stack spacing={2} style={styles.cotainer}>
        <StatusBar style={'auto'}/>
        <Image style= {styles.stretch}
            source={require('../../assets/logo.png')} 
        />
        <TextInput
        label="BITCOIN"
        variant="standard"
        editable={false}
        style={styles.input}
        color="rgb(178, 68, 68)"
        value={'R$ '+bitcoinCompra.toString()+' -> Variação: '+bitcoinVariacao.toString()}
        />
      <TextInput
        label="DOLAR"
        variant="standard"
        editable={false}
        style={styles.input}
        color="rgb(178, 68, 68)"
        value={'R$ '+dolarCompra.toString()+' -> Variação: '+dolarVariacao.toString()}
        />
      <TextInput
        style={styles.input}
        label="EURO"
        variant="standard"
        editable={false}
        color="rgb(178, 68, 68)"
        value={'R$ '+euroCompra.toString()+' -> Variação: '+euroVariacao.toString()}
        />
      <TextInput
        style={styles.input}
        label="PESO"
        variant="standard"
        editable={false}
        color="rgb(178, 68, 68)"
        value={'R$ '+pesoCompra.toString()+' -> Variação: '+pesoVariacao.toString()}
      />
    </Stack>
  )
}
const styles = StyleSheet.create({
    cotainer: {
      flex: 1,
      backgroundColor: '#fff',
      opacity: 0.7
    },
    input: {
      marginLeft: 30,
      marginRight: 30,
      marginTop: 60, 
      width: 'auto',
      height: 10,
    },
    button: {
      alignItems: "center",
      backgroundColor: 'rgb(178, 68, 68)',
      padding: 10, 
      marginTop: 140,
      marginLeft: 25,
      marginRight: 25,
      width: 'auto',
      height: 60,
      borderRadius: 30
    },
    texto: {
      marginTop: 10,
      fontSize: 15,
      color: '#000'
      
    },
    stretch: {
      resizeMode: 'stretch',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  });