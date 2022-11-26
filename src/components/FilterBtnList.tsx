import {FC} from 'react';
import {FlatList, ScrollView} from 'react-native';
import FilterBtn from './FilterBtn';

interface FilterBtnListInterface {
  labels: any;
  setActiveFilter: any;
  activeFilter: string;
}

const FilterBtnList: FC<FilterBtnListInterface> = ({
  labels,
  setActiveFilter,
  activeFilter,
}) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={labels}
      renderItem={({item}) => (
        <FilterBtn
          active={activeFilter === item && true}
          handler={() => setActiveFilter(item)}
          label={item}
        />
      )}
      keyExtractor={item => item}
      initialNumToRender={5}
    />
  );
};

export default FilterBtnList;
