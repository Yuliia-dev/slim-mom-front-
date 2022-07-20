import { BsPlusLg } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { diarySelectors } from 'redux/app/diaryPerDay';
import DiaryDateCalendar from 'components/DiaryDateCalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
import MobileSidebar from '../../components/MobileSidebar';
import {
  AddBtnMobile,
  PageWrap,
  SidebarWrap,
  ListWrap,
  ContainerDiary,
  AlternativeText,
} from './DiaryPage.styled';
import SideBar from 'components/SideBar';
import { diaryPerDayOperation } from 'redux/app/diaryPerDay';
import Header from 'components/Header';

export default function DiaryPage() {
  const dispatch = useDispatch();
  const currentDate = new Date().toLocaleDateString();
  const [mobileAddSelected, setMobileAddSelected] = useState(false);
  const date = useSelector(diarySelectors.getCurrentDate);
  const isCurrentDay = date === currentDate;

  useEffect(() => {
    dispatch(
      diaryPerDayOperation.actionGetProducts({ date: currentDate }),
    ).then(res => {
      if (typeof res.payload === 'string') {
        dispatch(
          diaryPerDayOperation.actionCreateProductsList({ date: currentDate }),
        );
      }
    });
  }, [currentDate, dispatch]);

  const formSubmitHandler = data => {
    const { product, weight } = data;

    dispatch(
      diaryPerDayOperation.actionAddProduct({
        date: currentDate,
        data: { product: product, weightGrm: weight },
      }),
    );

    setMobileAddSelected(false);
  };

  return (
    <>
      <Header localPage="DiaryPage" />
      <PageWrap>
        <MobileSidebar onGoBack={() => setMobileAddSelected(false)} />

        <ContainerDiary>
          {!mobileAddSelected && <DiaryDateCalendar />}

          {/* {isLoading ? (
            <LoaderPosition>
              <Rings color="#FC842D" height={50} width={50} />
            </LoaderPosition>
          ) : (
            <div> */}
          {isCurrentDay ? (
            <DiaryAddProductForm
              onSubmit={formSubmitHandler}
              className={mobileAddSelected ? '' : 'hideOnMobile'}
            />
          ) : (
            <AlternativeText>Продукти якi ви з'їли в цей день:</AlternativeText>
          )}

          <ListWrap className={mobileAddSelected ? 'hideOnMobile' : ''}>
            {<DiaryProductsList />}
          </ListWrap>

          {isCurrentDay && !mobileAddSelected && (
            <AddBtnMobile
              className={'showOnMobile'}
              onClick={() => setMobileAddSelected(true)}
            >
              <BsPlusLg size={14} />
            </AddBtnMobile>
          )}
          {/* </div>
          )} */}
        </ContainerDiary>

        <SidebarWrap className={mobileAddSelected ? 'hideOnMobile' : ''}>
          <SideBar date={date} />
        </SidebarWrap>
      </PageWrap>
    </>
  );
}
