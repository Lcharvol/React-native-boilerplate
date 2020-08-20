import styled from "styled-components";
import { View } from "react-native";
import { BACKGROUND_COLOR } from "../../constants/colors";
import { WIN_HEIGHT } from "../../constants/dimensions";

export const HomeContainer = styled(View)`
	display: flex;
	flex: 1;
	backgroundcolor: ${BACKGROUND_COLOR};
	min-height: ${WIN_HEIGHT};
`;
