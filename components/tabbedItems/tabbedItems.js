import {
    Tabs,
} from 'antd';

const { TabPane } = Tabs;

const tabbedItems = props => {
    const { tabs = [], extraContent } = props;
    return (
        <div>
            <Tabs tabBarExtraContent={extraContent} defaultActiveKey="0" size="large">
                {
                    tabs.map((tab, idx) => <TabPane key={idx} tab={tab.title || "Name The Tab"}>
                        {tab.component}
                    </TabPane>)
                }
            </Tabs>
        </div>
    );
}

export default tabbedItems;
