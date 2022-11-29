import React, {FC} from 'react';
import {View, Text, Modal, Pressable} from 'react-native';
import {countries, languages} from 'src/data/data';
import styles from 'src/styles/Common.styles';
import FilterBtnList from './FilterBtnList';

interface FilterModalInterface {
  visible: boolean;
  visibilityHandler: (visibility: boolean) => void;
  activeLang: string;
  setActiveLang: (lang: string) => void;
  activeCountry: string;
  setActiveCountry: (country: string) => void;
}

const FilterModal: FC<FilterModalInterface> = ({
  visible,
  visibilityHandler,
  activeLang,
  setActiveLang,
  activeCountry,
  setActiveCountry,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        visibilityHandler(!visible);
      }}>
      <View style={styles.bottomSheetContainer}>
        <Text style={styles.filterByLabel}>Language</Text>
        {/* Languages */}
        <FilterBtnList
          activeFilter={activeLang}
          setActiveFilter={(item: string) => setActiveLang(item)}
          labels={languages}
        />
        <Text style={styles.filterByLabel}>Country</Text>
        {/* Countries */}
        <FilterBtnList
          activeFilter={activeCountry}
          setActiveFilter={(item: string) => setActiveCountry(item)}
          labels={countries}
        />
        {/* Filter Btn */}
        <Pressable onPress={() => visibilityHandler(!visible)}>
          <View style={styles.filterBtnContainer}>
            <Text style={styles.filterBtnSm}>Save Filters</Text>
          </View>
        </Pressable>
      </View>
    </Modal>
  );
};

export default FilterModal;
