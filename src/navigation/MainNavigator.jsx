import { useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useGetProfileImageQuery } from '../services/shopService';
import { setProfileImage } from '../features/auth/authSlice';

const MainNavigator = () => {

    const {user, localId} = useSelector(state =>state.authReducer.value)
    const {data, isLoading, error} = useGetProfileImageQuery(localId)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(data){
            dispatch(setProfileImage(data.image))
        }
    },[data])

    return (
        <NavigationContainer>
            {user ?<TabNavigator /> : <AuthStack />}
        </NavigationContainer>
    )

}

export default MainNavigator

const styles = StyleSheet.create({})