/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';

import { Button } from '@ricult/ui';

import Checkmark from './icons/checkmark.svg';
import Book from './icons/book.svg';
import ChevronRight from './icons/chevron-right.svg';
import Blog from './icons/blog.svg';

export const App = () => {
  const [whatsNextYCoord ] = useState<number>(0);
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.section}>
            <Text style={styles.textLg}>Hello there,</Text>
            <Text style={[styles.textXL, styles.appTitleText]} testID="heading">
              Welcome Mobile 👋
            </Text>
          </View>
          <View style={styles.section}>
            <View style={styles.hero}>
              <View style={styles.heroTitle}>
                <Checkmark
                  width={32}
                  height={32}
                  stroke="hsla(162, 47%, 50%, 1)"
                />
                <Text style={[styles.textLg, styles.heroTitleText]}>
                  You're up and running
                </Text>
              </View>
              <Button text="Custom Lib Button" onPress={()=>{console.log("custom pressed")}}/>
              <Button text="What's next?" onPress={() => {
                  scrollViewRef.current?.scrollTo({
                    x: 0,
                    y: whatsNextYCoord,
                  });
                }}/>
              {/* <TouchableOpacity
                style={styles.whatsNextButton}
                onPress={() => {
                  scrollViewRef.current?.scrollTo({
                    x: 0,
                    y: whatsNextYCoord,
                  });
                }}
              >
                <Text style={[styles.textMd, styles.textCenter]}>
                  What's next?
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
          <View style={styles.section}>
            <View style={[styles.shadowBox]}>
              <Text style={[styles.marginBottomMd, styles.textLg]}>
                Learning materials
              </Text>
              <TouchableOpacity
                style={[styles.listItem, styles.learning]}
                onPress={() =>
                  Linking.openURL(
                    'https://nx.dev/getting-started/intro?utm_source=nx-project'
                  )
                }
              >
                <Book width={24} height={24} stroke="#000000" />
                <View style={styles.listItemTextContainer}>
                  <Text style={[styles.textMd]}>Documentation</Text>
                  <Text style={[styles.text2XS, styles.textSubtle]}>
                    Everything is in there
                  </Text>
                </View>
                <ChevronRight width={18} height={18} stroke="#000000" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.listItem, styles.learning]}
                onPress={() =>
                  Linking.openURL('https://blog.nrwl.io/?utm_source=nx-project')
                }
              >
                <Blog width={24} height={24} stroke="#000000" />
                <View style={styles.listItemTextContainer}>
                  <Text style={[styles.textMd]}>Blog</Text>
                  <Text style={[styles.text2XS, styles.textSubtle]}>
                    Changelog, features & events
                  </Text>
                </View>
                <ChevronRight width={18} height={18} stroke="#000000" />
              </TouchableOpacity>
            </View>
          </View>          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  codeBlock: {
    backgroundColor: 'rgba(55, 65, 81, 1)',
    marginVertical: 12,
    padding: 12,
    borderRadius: 4,
  },
  monospace: {
    color: '#ffffff',
    fontFamily: 'Courier New',
    marginVertical: 4,
  },
  comment: {
    color: '#cccccc',
  },
  marginBottomSm: {
    marginBottom: 6,
  },
  marginBottomMd: {
    marginBottom: 18,
  },
  marginBottomLg: {
    marginBottom: 24,
  },
  textLight: {
    fontWeight: '300',
  },
  textBold: {
    fontWeight: '500',
  },
  textCenter: {
    textAlign: 'center',
  },
  text2XS: {
    fontSize: 12,
  },
  textXS: {
    fontSize: 14,
  },
  textSm: {
    fontSize: 16,
  },
  textMd: {
    fontSize: 18,
  },
  textLg: {
    fontSize: 24,
  },
  textXL: {
    fontSize: 48,
  },
  textContainer: {
    marginVertical: 12,
  },
  textSubtle: {
    color: '#6b7280',
  },
  section: {
    marginVertical: 12,
    marginHorizontal: 12,
  },
  shadowBox: {
    backgroundColor: 'white',
    borderRadius: 24,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  appTitleText: {
    paddingTop: 12,
    fontWeight: '500',
  },
  hero: {
    borderRadius: 12,
    backgroundColor: '#143055',
    padding: 36,
    marginBottom: 24,
  },
  heroTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  heroTitleText: {
    color: '#ffffff',
    marginLeft: 12,
  },
  heroText: {
    color: '#ffffff',
    marginVertical: 12,
  },
  whatsNextButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 8,
    width: '50%',
    marginTop: 24,
  },
  learning: {
    marginVertical: 12,
  },
  love: {
    marginTop: 12,
    justifyContent: 'center',
  },
});

export default App;
