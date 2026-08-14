import { Redirect } from "expo-router";
import { useSelector } from "react-redux";

export default function Index() {
    const user = useSelector((state) => state.user.user);
    if (user) {
        return <Redirect href="/(tabs)/home" />;
    }
    return <Redirect href="/login" />;
}
