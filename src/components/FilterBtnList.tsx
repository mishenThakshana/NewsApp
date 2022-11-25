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
    <ScrollView horizontal>
      {labels.map((label: any) => (
        <FilterBtn
          key={label}
          active={activeFilter === label && true}
          handler={() => setActiveFilter(label)}
          label={label}
        />
      ))}
    </ScrollView>
  );
};

export default FilterBtnList;
