import React, {FC} from 'react';
import {StyleSheet} from 'react-native';

import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {BOX_SIZE, Colors, GRID_SIZE, POSITIONS} from './utils/contants';

type TTile = {
  x?: number;
  y?: number;
  color?: number;
  hide: boolean;
  id: number;
};
const Tile: FC<TTile> = ({x = 0, y = 0, color = 0, hide}) => {
  const DURATION = 300;
  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(Colors[color], {duration: DURATION}),
      transform: [
        {translateX: withTiming(POSITIONS[x], {duration: DURATION})},
        {translateY: withTiming(POSITIONS[y], {duration: DURATION})},
      ],
    };
  });
  if (hide) {
    return null;
  }
  return <Animated.View style={[styles.box, animatedStyles]} />;
};

export default Tile;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    borderWidth: 4,
    borderColor: '#03071e',
    width: GRID_SIZE,
    height: GRID_SIZE,
    borderRadius: 4,
  },
  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#03071e',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
