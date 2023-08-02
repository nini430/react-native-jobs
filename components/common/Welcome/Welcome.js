import React, { useState } from 'react';
import { View, Text, TextInput, Image, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SearchImg from '../../../assets/icons/search.png';
import styles from './WelcomeStyled';
import { useRouter } from 'expo-router';

const jobTypes = ['Full-Time', 'Part-Time', 'Contractor'];

const Welcome = () => {
  const [activeItem, setActiveItem] = useState('Full-Time');
  const router=useRouter();
  return (
    <View style={{ paddingTop: 2 }}>
      <View>
        <Text style={styles.username}>Hello Nini!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job here!</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="What are you looking for?"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.searchBtn}>
          <Image style={styles.searchImg} source={SearchImg} />
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 10, alignItems: 'center' }}>
        <FlatList
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{ columnGap: 30 }}
          data={jobTypes}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setActiveItem(item);
                  router.push(`/search/${item}`)
                }}
                style={styles.tabBtn(activeItem, item)}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Welcome;
