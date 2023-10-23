import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Picker } from 'react-native';

const App = () => {
 const [size, setSize] = useState('');
 const [extraCheese, setExtraCheese] = useState(false);
 const [total, setTotal] = useState(0);

 const calculateTotal = () => {
    let price = 10.99;

    if (size === 'medium') price = 15.99;
    if (size === 'large') price = 19.99;

    if (extraCheese) price += 1.00;

    setTotal(price);
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>1:21 Italian Supreme Pizza</Text>
      <Picker
        selectedValue={size}
        onValueChange={(itemValue, itemIndex) => setSize(itemValue)}
      >
        <Picker.Item label="Small" value="small" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Large" value="large" />
      </Picker>
      <View style={styles.row}>
        <Text style={styles.label}>Extra Cheese</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setExtraCheese}
          value={extraCheese}
        />
      </View>
      <Button title="Calculate Total" onPress={calculateTotal} />
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
 },
 row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
 },
 label: {
    fontSize: 18,
    marginRight: 10,
 },
 total: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
 },
});

export default App;