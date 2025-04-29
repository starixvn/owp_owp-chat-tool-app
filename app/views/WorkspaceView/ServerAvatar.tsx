import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';

import { isTablet } from '../../lib/methods/helpers';
import { useTheme } from '../../theme';

const SIZE = 96;
const MARGIN_TOP = isTablet ? 0 : 64;
const BORDER_RADIUS = 8;

const styles = StyleSheet.create({
	container: {
		marginBottom: 16,
		width: '100%',
		height: SIZE + MARGIN_TOP,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	image: {
		width: SIZE,
		height: SIZE,
		borderRadius: BORDER_RADIUS
	}
});

interface IServerAvatar {
	url: string;
	image: string;
}
// LOS: Disable load image from server
// LOS: Los image from static folder
// TODO: missing skeleton
const ServerAvatar = React.memo(({ url, image }: IServerAvatar) => {
	const { colors } = useTheme();

	return (
		<View style={styles.container}>
			{image && (
				<Image
					style={[styles.image, { borderColor: colors.strokeLight }]}
					source={require('../../static/images/owp_no_name.png')}
				/>
			)}
		</View>
	);
});

export default ServerAvatar;
