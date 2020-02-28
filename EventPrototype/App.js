/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  FlatList,
    SectionList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      /*<>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              <Header />
            {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                  <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
              )}
              <View style={styles.body}>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Step One</Text>
                  <Text style={styles.sectionDescription}>
                    Edit <Text style={styles.highlight}>App.js</Text> to change this
                    screen and then come back to see your edits.
                  </Text>
                  <Text> Hello World!</Text>
                </View>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>See Your Changes</Text>
                  <Text style={styles.sectionDescription}>
                    <ReloadInstructions />
                  </Text>
                </View>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Debug</Text>
                  <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Learn More</Text>
                  <Text style={styles.sectionDescription}>
                    Read the docs to discover what to do next:
                  </Text>
                </View>
                <LearnMoreLinks />
              </View>
            </ScrollView>
          </SafeAreaView>
        </>*/
      //<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.sectionContainer}>
        <StatusBar style={styles.statusBar} />
        <Text style={styles.sectionTitle}>Welcome</Text>
        <Button
          style={styles.button}
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          style={styles.button}
          title="Register"
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </View>
    );
  }
}

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text>Username</Text>
        <TextInput style={styles.textInput} />
        <Text>Password</Text>
        <TextInput style={styles.passTextInput} secureTextEntry={true} />
        <Button
          style={styles.button}
          title="Login"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}
class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text>Username</Text>
        <TextInput style={styles.textInput} />
        <Text>Password</Text>
        <TextInput style={styles.passTextInput} secureTextEntry={true} />
        <Button
          style={styles.button}
          title="Register"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
const data = [
  {
    title: 'Recommended for You',
    data: ['Christy Moore', 'Horslips', 'Aslan'],
  },
  {
    title: 'Events in Your Area',
    data: ['2manydjs', 'Pat McManus Band', 'Damian Dempsey'],
  },
  {
    title: 'Trending',
    data: ['Guns N Roses', 'Electric Picnic', 'Duran Duran'],
  },
  {
    title: 'From Nearby Cities',
    data: ['The Chemical Brothers', 'Jon Hopkins'],
  },
  {
    title: 'Local Bands',
    data: ['Elder Druid', 'Royal Autumn'],
  },
  {
    title: 'More Events',
    data: ['Insomnium', 'Yes'],
  },
];
function EventItem({title}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

class MainScreen extends React.Component {
  render() {


    const eventList = [
      {key: 'Christy Moore', ven: 'Vicar Street', dat: '17/12/2019'},
      {key: 'Hudson Taylor', ven: 'Whelans', dat: '18/12/2019'},
      {key: '2manydjs', ven: 'District 8', dat: '20/12/2019'},
      {key: 'Pat McManus Band', ven: 'The Purty Kitchen', dat: '20/12/2019'},
    ];
    return (
        <SafeAreaView style={styles.sectionContainer}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <EventItem title={item} />}
          initialNumToRender={6}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.sectionTitle}>{title}</Text>
          )}
        />
        </SafeAreaView>
      /*<View style={styles.sectionContainer}>
        {eventList.length > 0 ? (
          <FlatList
            data={eventList}
            renderItem={({item}) => (
              <View style={styles.itemView}>
                <Text style={styles.listItem}>
                  {item.key}
                </Text>
                <Text style={styles.subListItem}>
                  {item.ven}
                </Text>
                <Text style={styles.subListItem}>
                  {item.dat}
                </Text>)
              </View>
            )}
          />
        ) : (
          <Text style={styles.errorText}>No events were found</Text>
        )}
      </View>*/
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Main: MainScreen,
  },
  {
    initialRouteName: 'Home',
  },
);
const AppContainer = createAppContainer(RootStack);
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#22FD1B',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#22FD1B',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
  },
  passTextInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
  },
  button: {
    padding: 50,
    marginVertical: 30,
    width: 100,
    backgroundColor: '#22FD1B',
  },
  statusBar: {
    backgroundColor: '#22FD1B',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  itemView: {
    padding: 10,
    borderBottomColor: 'black',
  },
  listItem: {
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    marginVertical: 10,
    backgroundColor: '#22FD1B',
    padding: 20,
    textAlign: 'center',
  },
  subListItem: {
    fontSize: 24,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
