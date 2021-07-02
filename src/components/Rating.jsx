import { FontIcon } from "@fluentui/react/lib-commonjs/Icon";
import { initializeIcons } from "@fluentui/react/lib-commonjs/Icons";

export default function Rating(props) {
  return <div>{props.stars}/5 ⭐</div>;
}
