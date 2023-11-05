import {Refine} from "@refinedev/core";
import {
    ThemedLayoutV2,
    notificationProvider,
    ErrorComponent,
    RefineThemes,
} from "@refinedev/antd";
import routerBindings, {
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import {AntdInferencer} from "@refinedev/inferencer/antd";
import {ConfigProvider} from "antd";
import "@refinedev/antd/dist/reset.css";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ConfigProvider theme={RefineThemes.Blue}>
                <Refine
                    routerProvider={routerBindings}
                    dataProvider={dataProvider(
                        "http://127.0.0.1:3001/api/v1"
                    )}
                    notificationProvider={notificationProvider}
                    resources={[
                        {
                            name: "user",
                            list: "/user",
                            show: "/user/show/:id",
                            create: "/user/create",
                            edit: "/user/edit/:id",
                            canDelete: true,
                        },
                        {
                            name: "balance",
                            list: "/balance",
                            show: "/balance/show/:id",
                            create: "/balance/create",
                            edit: "/balance/edit/:id",
                            canDelete: true,
                        },
                        {
                            name: "coin-type",
                            list: "/coin-type",
                            show: "/coin-type/show/:id",
                            create: "/coin-type/create",
                            edit: "/coin-type/edit/:id",
                            canDelete: true,
                        },
                        {
                            name: "exchange-rate",
                            list: "/exchange-rate",
                            show: "/exchange-rate/show/:id",
                            create: "/exchange-rate/create",
                            edit: "/exchange-rate/edit/:id",
                            canDelete: true,
                        },
                        {
                            name: "transaction",
                            list: "/transaction",
                            show: "/transaction/show/:id",
                            create: "/transaction/create",
                            edit: "/transaction/edit/:id",
                        },
                        {
                            name: "transaction-type",
                            list: "/transaction-type",
                            show: "/transaction-type/show/:id",
                            create: "/transaction-type/create",
                            edit: "/transaction-type/edit/:id",
                            canDelete: true,
                        },
                        {
                            name: "product",
                            list: "/product",
                            show: "/product/show/:id",
                            create: "/product/create",
                            edit: "/product/edit/:id",
                            canDelete: true,
                        },
                    ]}
                    options={{
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                    }}
                >
                    <Routes>
                        <Route
                            element={
                                <ThemedLayoutV2>
                                    <Outlet/>
                                </ThemedLayoutV2>
                            }
                        >
                            <Route index element={<NavigateToResource resource="user"/>}/>
                            <Route path="user">
                                <Route index element={<AntdInferencer/>}/>
                                <Route
                                    path="show/:id"
                                    element={<AntdInferencer/>}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<AntdInferencer/>}
                                />
                                <Route
                                    path="create"
                                    element={<AntdInferencer/>}
                                />
                                <Route
                                    path="delete/:id"
                                    element={<AntdInferencer/>}
                                />
                            </Route>
                            <Route path="*" element={<ErrorComponent/>}/>
                        </Route>
                        <Route
                            element={
                                <ThemedLayoutV2>
                                    <Outlet/>
                                </ThemedLayoutV2>
                            }
                        >
                            <Route index element={<NavigateToResource resource="balance"/>}/>
                            <Route path="balance">
                                <Route index element={<AntdInferencer/>}/>
                                <Route
                                    path="show/:id"
                                    element={<AntdInferencer/>}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<AntdInferencer/>}
                                />
                                <Route
                                    path="create"
                                    element={<AntdInferencer/>}
                                />
                            </Route>
                            <Route path="*" element={<ErrorComponent/>}/>
                        </Route>
                        <Route
                            element={
                                <ThemedLayoutV2>
                                    <Outlet/>
                                </ThemedLayoutV2>
                            }
                        >
                            <Route index element={<NavigateToResource resource="coin-type"/>}/>
                            <Route path="coin-type">
                                <Route index element={<AntdInferencer/>}/>
                                <Route
                                    path="show/:id"
                                    element={<AntdInferencer/>}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<AntdInferencer/>}
                                />
                                <Route
                                    path="create"
                                    element={<AntdInferencer/>}
                                />
                            </Route>
                            <Route path="*" element={<ErrorComponent/>}/>
                        </Route>
                        <Route
                            element={
                                <ThemedLayoutV2>
                                    <Outlet/>
                                </ThemedLayoutV2>
                            }
                        >
                            <Route index element={<NavigateToResource resource="exchange-rate"/>}/>
                            <Route path="exchange-rate">
                                <Route index element={<AntdInferencer/>}/>
                                <Route
                                    path="show/:id"
                                    element={<AntdInferencer/>}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<AntdInferencer/>}
                                />
                                <Route
                                    path="create"
                                    element={<AntdInferencer/>}
                                />
                            </Route>
                            <Route path="*" element={<ErrorComponent/>}/>
                        </Route>
                        <Route
                            element={
                                <ThemedLayoutV2>
                                    <Outlet/>
                                </ThemedLayoutV2>
                            }
                        >
                            <Route index element={<NavigateToResource resource="transaction"/>}/>
                            <Route path="transaction">
                                <Route index element={<AntdInferencer/>}/>
                                <Route
                                    path="show/:id"
                                    element={<AntdInferencer/>}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<AntdInferencer/>}
                                />
                                <Route
                                    path="create"
                                    element={<AntdInferencer/>}
                                />
                            </Route>
                            <Route path="*" element={<ErrorComponent/>}/>
                        </Route>
                        <Route
                            element={
                                <ThemedLayoutV2>
                                    <Outlet/>
                                </ThemedLayoutV2>
                            }
                        >
                            <Route index element={<NavigateToResource resource="transaction-type"/>}/>
                            <Route path="transaction-type">
                                <Route index element={<AntdInferencer/>}/>
                                <Route
                                    path="show/:id"
                                    element={<AntdInferencer/>}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<AntdInferencer/>}
                                />
                                <Route
                                    path="create"
                                    element={<AntdInferencer/>}
                                />
                            </Route>
                            <Route path="*" element={<ErrorComponent/>}/>
                        </Route>
                        <Route
                            element={
                                <ThemedLayoutV2>
                                    <Outlet/>
                                </ThemedLayoutV2>
                            }
                        >
                            <Route index element={<NavigateToResource resource="product"/>}/>
                            <Route path="product">
                                <Route index element={<AntdInferencer/>}/>
                                <Route
                                    path="show/:id"
                                    element={<AntdInferencer/>}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<AntdInferencer/>}
                                />
                                <Route
                                    path="create"
                                    element={<AntdInferencer/>}
                                />
                            </Route>
                            <Route path="*" element={<ErrorComponent/>}/>
                        </Route>                    </Routes>
                    <UnsavedChangesNotifier/>
                </Refine>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export default App;