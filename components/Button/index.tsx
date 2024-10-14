import GoogleIcon from "@/assets/svg/google-icon";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
  View,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export default function Button({
  title,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#ffffff",
        padding: 20,
        marginTop: 16,
        borderRadius: 6,
        width: "90%",
      }}
      activeOpacity={0.5}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={"#000"} />
      ) : (
        <>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ marginRight: 10 }}>
              <GoogleIcon />
            </View>
            <Text style={{ fontSize: 16 }}>{title}</Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}
