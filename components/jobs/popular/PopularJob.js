import React from 'react';
import { View , Text, FlatList} from 'react-native';
import styles from './PopularJobStyled';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PopularCard from '../../cards/popular/PopularCard';

const PopularJob = () => {
  return (
    <View style={{paddingTop:25}}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      <TouchableOpacity>
        <Text>Show All</Text>
      </TouchableOpacity>
      </View>
      <View style={{paddingTop:10}}>
      <FlatList keyExtractor={item=>item.job_id} contentContainerStyle={{columnGap:20}} horizontal data={[1,2,3,4,5,6,7]} renderItem={()=>{
        return (
          <PopularCard/>
        )
      }}/>
      </View>
    </View>
  );
};

export default PopularJob;
