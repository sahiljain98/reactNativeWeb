import React from 'react';
import { FlatList, Text, TouchableOpacity,Alert } from 'react-native';
import pokemonStore from '../data/pokemonStore';

export default (params) => {

    const selectedPokemon = (pokemon) => {
        params.selectPokemon(pokemon);
        params.history.push('pokemon');
    }

    return <FlatList
        data={pokemonStore}
        keyExtractor={pokemonStore => pokemonStore.number}
        renderItem={({ item }) => {
            return (
                <TouchableOpacity onPress={() => selectedPokemon(item)}>
                    <Text>{item.name}</Text>
                </TouchableOpacity>

            )
        }}
    />

}
