import React, { useState, useEffect, Component } from "react";
import api from "./API";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";

class App extends Component {
  state = {
    dadosApi: [],
    loading: true,
  };

  async componentDidMount() {
    // busca na api
    const response = await api.get("gasolina");
    this.setState({ dadosApi: response.data, loading: false });
  }

  render() {
    const { dadosApi } = this.state;
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator></ActivityIndicator>
        </View>
      );
    }
    return (
      <div>
        {dadosApi.map((dadosApi) => (
          <li key={dadosApi.item_id}>
            <h2>{dadosApi.original}</h2>
          </li>
        ))}
        
      </div>
    );
  }
}

export default App;
