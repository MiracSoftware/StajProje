/* 1 dosyada, en fazla 1 adet export default olabilir. Birden fazla export olabilir. */
/*Export Default = Dosyanın Kimliği, bu nedenle sadece 1 tane olabilir. */
/* Export = Dosyanın parçaları, bu nedenle 1'den fazla kez olabilir. */

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Products } from '../types/urunEgitim';

const abc: Products[] = [
    { id: 1, name: "Domates", price: 100 }, /* = Kullanmak yok. / : var. */   /* id = 1 olmaz. | id: 1 olur. */
    { id: 2, name: "Biber", price: 75 },
    { id: 3, name: "Patlıcan", price: 70 },
];

export default function Urunler() { /* Bunu görüyorsan importlarda bu olayı çağırmak için süslü parantez kullanmayacaksın. export default varsa, importlarda süslü parantez yoktur. Sadece export varsa, importlarda süslü parantez vardır. */
    return (
        <View>
            {abc.map((item) => (
                <TouchableOpacity key={item.id}>
                    <Text>{item.name}</Text>
                    <Text>{item.price} ₺</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}










/*import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { MenuItem } from '../types/menu'

const menuData: MenuItem[] = [
    { id: 1, name: "Ana Sayfa", link: "#" },
    { id: 2, name: "Haberler", link: "#" },
];

export default function Navbar() {
    return (
        <View>
            {menuData.map((item) => (
                <TouchableOpacity key={item.id}>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}


*/
