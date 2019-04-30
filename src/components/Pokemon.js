import React from 'react';
import { View, Text, Image } from 'react-native';

import { Link } from '../routing';

export default (params) => {
    let { selectedPokemon } = params;


    const backButton =
        <View>
            <Link to="/">
                <Text>Go Back</Text>
            </Link>
        </View>





    if (!selectedPokemon) {
        return <View>
            {backButton}
            <Text>No Pokemon Selected!</Text>
        </View>
    }
    return <View >
        {backButton}
        <Text>{selectedPokemon.number}</Text>
        <Text>{selectedPokemon.name}</Text>
        <Text>{selectedPokemon.type}</Text>
        <Image source={{ uri: selectedPokemon.photo }} style={{ height: 50, width: 50, resizeMode: 'cover' }} />
    </View>

}
