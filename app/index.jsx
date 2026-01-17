import { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, IconButton, PaperProvider, Text, TextInput } from 'react-native-paper';

export default function App() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  const [direction, setDirection] = useState('up'); // 'up' or 'down'
  const [startingPoint, setStartingPoint] = useState(0);
  const [label, setLabel] = useState('');

  useEffect(() => {
    setCount(startingPoint);
  }, []);

  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
            <Text style={styles.header}>from var x</Text>
            <Text style={styles.subtitle}>the limitless counting app</Text>
        </View>

        {/* Counter Display */}
        <TouchableOpacity
            style={styles.counterContainer}
            onPress={() => {
                Keyboard.dismiss(); 
                if (direction === 'up') {
                    setCount(count + incrementBy); 
                } else {
                    setCount(count - incrementBy);
                }
            }}
        >
            <Text 
                style={styles.counter}
                numberOfLines={1}
            >
                {count.toLocaleString()}
            </Text>
        </TouchableOpacity>

        {/* Label Section */}
        <View style={styles.section}>
          <TextInput
            placeholder="Widgets"
            value={label}
            onChangeText={setLabel}
            onBlur={() => {}}
            mode="outlined"
            editable={true}
            selectTextOnFocus={true}
            outlineColor="#e0e0e0"
            activeOutlineColor="#bdbdbd"
            style={styles.labelInput}
          />
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
            <View style={styles.settingRow}>
                <Text style={styles.settingsLabel}>Count</Text>
                
                <IconButton 
                    icon={direction === 'up' ? 'chevron-up' : 'chevron-down'}
                    mode="contained"
                    size={20}
                    onPress={() => setDirection(direction === 'up' ? 'down' : 'up')}
                >
                    {direction === 'up' ? '↑' : '↓'}
                </IconButton>
                
                <Text style={styles.settingsLabel}>by</Text>

                <TextInput
                value={incrementBy.toString()}
                onChangeText={(text) => setIncrementBy(parseInt(text) || 1)}
                keyboardType="numeric"
                selectTextOnFocus={true}
                mode="outlined"
                outlineColor="#e0e0e0"
                activeOutlineColor="#bdbdbd"
                style={styles.chipInput}
                />

                <Text style={styles.settingsLabel}>starting at</Text>

                <TextInput
                value={startingPoint.toString()}
                onChangeText={(text) => setStartingPoint(parseInt(text) || 0)}
                onBlur={() => setCount(startingPoint)}
                keyboardType="numeric"
                selectTextOnFocus={true}
                mode="outlined"
                outlineColor="#e0e0e0"
                activeOutlineColor="#bdbdbd"
                style={styles.chipInput}
                />
            </View>
        </View>

        {/* Reset Button */}
        <Button 
            mode="text"
            onPress={() => {
                setCount(0);
                setDirection('up');
                setIncrementBy(1);
                setStartingPoint(0);
                setLabel('');
                Keyboard.dismiss()
            }}
        >
          Reset
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  counter: {
    fontSize: 120,
    fontWeight: '100',
  },
  section: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
  },
  settingRow: {
    flexDirection: 'row',
    marginBottom: 15,
    gap: 10,
  },
  directionButton: {
    flex: 1,
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  labelInput: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  settingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 15,
    flexWrap: 'wrap',
  },
  settingsLabel: {
    fontSize: 12,
    color: '#666',
  },
  smallButton: {
    minWidth: 40,
  },
  smallInput: {
    width: 60,
    height: 40,
    backgroundColor: '#fff',
  },
  chipInput: {
    height: 40,
    width: 70,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    color: '#333',
  },
});