import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import asyncStorage from '@react-native-async-storage/async-storage';

interface p {
  navigation: any;
}

interface s {
  data: any;
}
export class Dashboard extends Component<p, s> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: '',
    };
  }
  componentDidMount() {
    this.getDatas();
  }

  getDatas = () => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(result => {
        console.log('result====>', result.products);
        this.setState({data: result.products});
      });
  };
  renderItem = ({item}: any) => {
    console.log('hhh', item);
    return (
      <View
        style={{
          marginHorizontal: 15,
          borderWidth: 1,
          paddingTop: 5,
          paddingBottom: 5,
          borderRadius: 10,
        }}>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginHorizontal: 10}}>
            <View>
              <Image
                source={{uri: item.thumbnail}}
                style={{height: 45, width: 45, borderRadius: 25}}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>brand : </Text>
                <Text>{item.brand}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>category : </Text>
                <Text>{item.category}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>description : </Text>
                <Text style={{width: 200}}>{item.description}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  itemSeperator = () => {
    return <View style={{padding: 10, paddingTop: 5}} />;
  };

  logout = async () => {
    await asyncStorage.removeItem('Token'),
      this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'lightblue'}}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end', marginHorizontal: 15}}
          onPress={() => this.logout()}>
          <Text style={{fontSize: 20}}>Log out</Text>
        </TouchableOpacity>
        <View style={{marginTop: 15}}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            ItemSeparatorComponent={this.itemSeperator}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Dashboard;
