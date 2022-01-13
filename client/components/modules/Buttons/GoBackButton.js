import { useRouter } from "next/router";
import { Button, Icon } from "semantic-ui-react";

export default function GoBackButton() {
  const router = useRouter();
  return (
    <Button 
      icon  
      labelPosition="left"
      style={{border: "none", fontSize: "1.5rem"}}
      onClick={() => router.back()}
    >
      <Icon 
        name="arrow alternate circle left outline" 
        style={{background: "none", color: "black"}}
      />
      Go Back
    </Button>
  )
}