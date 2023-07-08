// Libraries/Packages
import React, {useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {moderateVerticalScale} from 'react-native-size-matters';

// Styles
import {styles} from './styles';

// Components
import {
  TextInputField,
  BookCard,
  LoadingSpinner,
  PrimaryButton,
} from '../../components';

// Utilities or Config
import {AppDispatch, RootState} from '../../store';
import {getBooks} from '../../features/books/booksThunk';
import AssetUtils from '../../utils/asset_utils';
import {Book} from '../../models/book';
import {
  searchBook,
  loadingHandler,
  saveBookDetail,
} from '../../features/books/booksSlice';
import RoutePaths from '../../utils/route_paths';
import {moderateScale} from 'react-native-size-matters';

interface RenderItemProps {
  item: Book;
  index: number;
}

// Type for the navigation object
type RootNavigationProp = NavigationProp<any>; // or NavigationProp<{}> if you prefer

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {filteredBooks, error, isLoading} = useSelector(
    (store: RootState) => store.books,
  );

  const navigation = useNavigation<RootNavigationProp>();

  // *** Initially Calling getBooks API *** //
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Something went wrong, try again</Text>
        <View style={styles.btnContainer}>
          <PrimaryButton
            btnText="Fetch Books"
            btnRadius={100}
            btnTextColor={'#fff'}
            btnColor={'#004d6d'}
            onPressHandler={() => dispatch(getBooks())}
          />
        </View>
      </View>
    );
  }

  // *** Single Book Render Handler ** //
  const renderItem = ({item, index}: RenderItemProps) => (
    <BookCard
      index={index}
      item={item}
      onPressHandler={() => {
        dispatch(saveBookDetail(item));
        navigation.navigate(RoutePaths.BOOK);
      }}
    />
  );

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Hi Nick</Text>
        <AssetUtils.UserAvatar />
      </View>

      <View style={{marginTop: moderateVerticalScale(30)}} />

      {/* Search TextField */}
      <TextInputField
        placeholder="Search..."
        placeholderColor={'#000'}
        onChangeText={async value => {
          dispatch(loadingHandler(true));

          dispatch(searchBook(value));
          setTimeout(() => {
            dispatch(loadingHandler(false));
          }, 1000);

          dispatch(searchBook(value));
        }}
        keyboardType="default"
        RightIcon={AssetUtils.SearchIcon}
        iconWidth={15.28}
        iconHeight={12.71}
      />

      <View style={{marginTop: moderateVerticalScale(30)}} />

      {/* No Book Found */}
      {!filteredBooks.length && !isLoading ? (
        <View style={styles.bookNotFoundContainer}>
          <Text style={styles.bookNotFoundText}>Book Not Exist</Text>
        </View>
      ) : null}

      {/* Loading Spinner */}
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <LoadingSpinner />
        </View>
      ) : (
        <FlatList
          style={styles.bookListContainer}
          data={filteredBooks}
          renderItem={renderItem}
          keyExtractor={item => item.title}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{height: moderateVerticalScale(18)}} />
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;
