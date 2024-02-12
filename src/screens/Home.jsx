import { StyleSheet, View } from 'react-native'
import React from 'react'
// import Header from '../components/Header'
import Categories from '../components/Categories'
import Search from '../components/Search'
import NavBar from '../components/NavBar'
import ProductsView from './ProductsView'

const Home = ({ categorySelected, setCategorySelected, keyword, setKeyword, onChangeScreen }) => {
    return !categorySelected ? (
        <View style={styles.container}>
            {/* <Header title={"Inicio"} /> */}
            <View>
                <Search keyword={keyword} onSearch={setKeyword} />
            </View>
            <Categories setCategorySelected={setCategorySelected} />
            <NavBar onChangeScreen={onChangeScreen} />
        </View>
    ) : <ProductsView categorySelected={categorySelected} setCategorySelected={setCategorySelected} keyword={keyword}/>
}

export default Home

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flex: 1,
    }
})