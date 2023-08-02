import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    username:{
        color:'blue',
        fontSize:20
    },
    welcomeMessage:{
        color:'black',
        fontSize:20
    },
    searchContainer:{
        flexDirection:'row',
        paddingTop:9
    },
    searchInput:{
        backgroundColor:'#d5d5d5',
        flex:1,
        borderRadius:'5px',
        padding:10
    },
    searchBtn:{
        width:50,
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'orangered',
        borderRadius:'5px',
        color:'white',
        tintColor:'white'
    },
    searchImg:{
        width:'60%',
        height:'70%',
        tintColor:'white'
    },
    tabBtn:(active,item)=>({
        borderColor:active===item?'black':'#d5d5d5',
        color:active===item?'black':'#d5d5d5',
        borderWidth:1,
        padding:6,
        borderRadius:10
    })
})

export default styles;