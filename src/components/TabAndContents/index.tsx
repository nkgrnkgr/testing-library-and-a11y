import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Title } from "../Title";

function Component() {
  return (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export function TabAndContents() {
  return (
    <>
      <Title>Tab and Contents</Title>
      <Component />
    </>
  );
}
