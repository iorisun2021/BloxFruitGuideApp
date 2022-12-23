import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import MyAppText from '../utils/MyAppText';
import Icon from 'react-native-vector-icons/Ionicons';
class NewsDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView>
                <View style={{height:'100%',flexDirection:'column', justifyContent:'space-between'}}>
                    <View>
                        <Image source={require('../image/News/Confetti.png')} style={{ height: 240, width: '100%' }} />
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <View style={{ marginTop: 10, marginBottom: 5 }}>
                            <MyAppText style={{ fontSize: 24 }}>Confetti</MyAppText>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{ backgroundColor: 'grey', height: 16, width: 16, borderRadius: 8 }}>

                                </TouchableOpacity>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 5 }}>
                                    <Text>
                                        Leo Sun
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="heart-outline" size={16} />
                                    <Text style={{ marginLeft: 2 }}>10</Text>
                                </View>
                                <View style={{ marginLeft: 10, flexDirection: 'row' }}>
                                    <Icon name="eye-outline" size={16} />
                                    <Text style={{ marginLeft: 2 }}>10K</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <MyAppText>
                                slddfjsljkljs slkdjf lks jsdfls sd lksdfj lks lksdjf lksdj s ksdjf sldjf slkdjf sldj lsd sdkjf sljdf ljsdlk jsld jdfj ß
                            </MyAppText>
                        </View>
                    </View>
                    <View style={{marginTop:10, flexDirection:'column', justifyContent:'space-between'}}>
                        <View style={{marginLeft:10, flexDirection:'row'}}>
                            <Text style={{fontWeight:'bold'}}>
                                Comments 
                            </Text>
                            <Text style={{marginLeft:10}}>
                                369
                            </Text>
                        </View>
                        <View style={{marginTop:10, backgroundColor:'#c1c1c1',padding:10}}>
                            <Text>
                                Remember to keep comments respectful and to follow our Community Guidelines
                            </Text>
                        </View>
                        <View style={{backgroundColor:'pink', marginTop:20, marginLeft:10, flexDirection:'collumn'}}>
                            <View>
                                <View style={{paddingBottom:20, width:'100%', flexDirection:'row',borderBottomColor:'grey', borderBottomWidth:0.5}}>
                                    <View>
                                        <TouchableOpacity style={{height:16, width:16, borderRadius:8, backgroundColor:'green'}}>

                                        </TouchableOpacity>
                                    </View>
                                    <View style={{marginLeft:15 ,flexDirection:'column'}}>
                                        <View>
                                            <Text>
                                                HimHim  2 days ago
                                            </Text>
                                        </View>
                                        <View style={{marginTop:5}}>
                                            <Text>
                                                Comments detail.......{"\n"}
                                                sflksjdfsljflsk
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginTop:20, paddingBottom:20, width:'100%', flexDirection:'row',borderBottomColor:'grey', borderBottomWidth:0.5}}>
                                    <View>
                                        <TouchableOpacity style={{height:16, width:16, borderRadius:8, backgroundColor:'green'}}>

                                        </TouchableOpacity>
                                    </View>
                                    <View style={{marginLeft:15 ,flexDirection:'column'}}>
                                        <View>
                                            <Text>
                                                HimHim  2 days ago
                                            </Text>
                                        </View>
                                        <View style={{marginTop:5}}>
                                            <Text>
                                                Comments detail.......{"\n"}
                                                sflksjdfsljflsk
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                
                                
                            </View>     
                        </View>
                    </View>
                    <View style={{height:40, marginTop:20, backgroundColor:'green'}}>
                        <View style={{flexDirection:'row', width:'100%', marginHorizontal:10, alignItems:'center', justifyContent:'space-between'}}>
                            <View>
                                <TouchableOpacity style={{width:16, height:16, borderRadius:8, backgroundColor:'red'}}>

                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1, marginLeft:10, marginRight:20}}>
                                <TextInput placeholderTextColor="black" placeholder="Add a comment..." style={{paddingLeft:5, height: 40, backgroundColor:'#c1c1c1',borderRadius: 4}}>

                                </TextInput>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
export default NewsDetail;



