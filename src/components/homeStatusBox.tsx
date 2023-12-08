import React from 'react';
import { View, Text, Image } from 'react-native';

const HomeStatusBox = () => {
  return (
    <>
    <View className={"flex-row justify-between "}>
        <View className={" mx-2"}>
          <View className={"border-2 border-cyan-200 rounded-lg flex-row justify-between"}>
            <View className={"p-3"}>
              
              <Text className={" text-xl font-bold text-gray-600"}>
                60
              </Text>
              <Text className={"text-sm font-bold text-gray-600 mt-2"}>
                Total User
              </Text>
            </View>
            <View className={"mt-4 mr-5 mb-4"}>
              <Image
                className={"w-12 h-12"}
                source={require('../assets/Images/gifimages/customer.gif')}
              />
            </View>
          </View>
        </View>
        <View className={" mx-2"}>
          <View className={"border-2 border-fuchsia-200 rounded-lg flex-row justify-between"}>
            <View className={"p-3"}>
              
              <Text className={" text-xl font-bold text-gray-600"}>
                60
              </Text>
              <Text className={"text-sm font-bold text-gray-600 mt-2"}>
                Total Week
              </Text>
            </View>
            <View className={"mt-4 mr-5 mb-4"}>
              <Image
                className={"w-12 h-12"}
                source={require('../assets/Images/gifimages/holy-week.gif')}
              />
            </View>
          </View>
        </View>
    </View>

        <View className={"flex-row justify-between mt-2"}>
            <View className={" mx-2"}>
                <View className={"border-2 border-orange-200 rounded-lg flex-row justify-between"}>
                    <View className={"p-3"}>
                    
                    <Text className={" text-xl font-bold text-gray-600"}>
                        $450
                    </Text>
                    <Text className={"text-sm font-bold text-gray-600 mt-2"}>
                    Total week
                    </Text>
                    </View>
                    <View className={"mt-4 mr-5 mb-4"}>
                    <Image
                        className={"w-12 h-12"}
                        source={require('../assets/Images/gifimages/money-bag.gif')}
                    />
                    </View>
                </View>
            </View>
            <View className={" mx-2"}>
                <View className={"border-2 border-lime-200 rounded-lg flex-row justify-between"}>
                    <View className={"p-3"}>
                        
                        <Text className={" text-xl font-bold text-gray-600"}>
                            $350
                        </Text>
                        <Text className={"text-sm font-bold text-gray-600 mt-2"}>
                        Total User
                        </Text>
                    </View>
                    <View className={"mt-4 mr-5 mb-4"}>
                    <Image
                        className={"w-12 h-12"}
                        source={require('../assets/Images/gifimages/save-money.gif')}
                    />
                    </View>
                </View>
            </View>
        </View>

        <View className={"flex-row justify-between mt-2"}>
            <View className={" mx-2"}>
                <View className={"border-2 border-teal-200 rounded-lg flex-row justify-between"}>
                    <View className={"p-3"}>
                    
                    <Text className={" text-xl font-bold text-gray-600"}>
                        $450
                    </Text>
                    <Text className={"text-sm font-bold text-gray-600 mt-2"}>
                    Investment
                    </Text>
                    </View>
                    <View className={"mt-4 mr-5 mb-4"}>
                    <Image
                        className={"w-12 h-12"}
                        source={require('../assets/Images/gifimages/profits.gif')}
                    />
                    </View>
                </View>
            </View>
            <View className={" mx-2"}>
                <View className={"border-2 border-blue-200 rounded-lg flex-row justify-between"}>
                    <View className={"p-3"}>
                        
                        <Text className={" text-xl font-bold text-gray-600"}>
                            $350
                        </Text>
                        <Text className={"text-sm font-bold text-gray-600 mt-2"}>
                        Total Profit
                        </Text>
                    </View>
                    <View className={"mt-4 mr-5 mb-4"}>
                    <Image
                        className={"w-12 h-12"}
                        source={require('../assets/Images/gifimages/profit.gif')}
                    />
                    </View>
                </View>
            </View>
        </View>
    </>
    
    
    // <View className={"flex-1"}>
    //   <View className={"flex-row justify-between px-4"}>
    //     <View className={"flex-1 mx-2"}>
    //       <View className={"border-2 border-cyan-200 rounded-lg flex-row justify-between"}>
    //         <View className={"p-3"}>
    //           <Text className={"text-xl font-semibold text-gray-900"}>
    //             Total User
    //           </Text>
    //           <Text className={"text-gray-900 text-sm font-semibold"}>
    //             60
    //           </Text>
    //         </View>
    //         <View className={"mt-6 mr-5"}>
    //           <Image
    //             className={"w-12 h-12"}
    //             source={require('../assets/Images/gifimages/customer.gif')}
    //           />
    //         </View>
    //       </View>
    //     </View>

    //     <View className={"flex-1 mx-2"}>
    //       <View className={"border-2 border-fuchsia-200 rounded-lg flex-row justify-between"}>
    //         <View className={"p-3"}>
    //           <Text className={"text-xl font-semibold text-gray-900"}>
    //             Total Week
    //           </Text>
    //           <Text className={"text-gray-900 text-sm font-semibold"}>
    //             45
    //           </Text>
    //         </View>
    //         <View className={"mt-6 mr-5"}>
    //           <Image
    //             className={"w-12 h-12"}
    //             source={require('../assets/Images/gifimages/holy-week.gif')}
    //           />
    //         </View>
    //       </View>
    //     </View>
    //   </View>
    // </View>
  );
};

export default HomeStatusBox;
