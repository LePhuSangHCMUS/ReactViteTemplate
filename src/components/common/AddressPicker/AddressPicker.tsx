//Lib
import { Col, Row, Select } from 'antd';
import axios from "axios";
import React, { useEffect, useState } from "react";
//Const
import { addressDefault } from "./const";
//Styled Component
import styles from "./AddressPicker.module.less";

//Const
const { Option } = Select;


interface IProps {
  provinceURLDefault?: string,
  districtURLDefault?: string,
  provinceDefault?: string,
  districtDefault?: string,
  districtPropertyDefault?: any,
  provincePropertyDefault?: any,
  onChangeProvince?:Function,
  onChangeDistrict?:Function,
}


const AddressPicker = (props: IProps) => {

  const {
    provinceDefault = addressDefault.PROVINCE.key,
    districtDefault = addressDefault.DISTRICT.key,
    provinceURLDefault = addressDefault.PROVINCE_URL,
    districtURLDefault = addressDefault.DISTRICT_URL,
    provincePropertyDefault = addressDefault.PROVINCE_PROPERTY,
    districtPropertyDefault = addressDefault.DISTRICT_PROPERTY,
    onChangeProvince=(value?:any)=>{},
    onChangeDistrict=(value?:any)=>{}

  } = props;
  const [province, setProvince] = useState(provinceDefault);
  const [district, setDistrict] = useState(districtDefault);
  const [provinceList, setProvinceList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [provinceLoading, setProvinceLoading] = useState(true);
  const [districtLoading, setDistrictLoading] = useState(true);
  useEffect(() => {
    //Get Province
    const getProvince = async () => {
      axios.get(provinceURLDefault).then(responses => {
        const provinceList = responses.data.results;
        setProvinceList(provinceList)
        setProvinceLoading(false);
      }).catch(errors => {
        alert("Get district fail !")
      });

    }
    getProvince();
    onChangeProvince(provinceDefault);
    onChangeDistrict(districtDefault);

  }, [])
  useEffect(() => {
    //Get Province
    const getDistrict = async () => {
      axios.get(districtURLDefault + province).then(responses => {
        const districtList = responses.data.results;
        setDistrictList(districtList)
        setDistrict(districtList[0][districtPropertyDefault?.id])
        setDistrictLoading(false);
      }).catch(errors => {
        alert("Get district fail !")
      });

    }
    getDistrict();
  }, [province])



  //Function

  const handleChangeProvince = (value: string) => {
    onChangeProvince(value);
    setProvince(value);
    setDistrictLoading(true);
  }
  
  const handleChangeDistrict = (value: string) => {
    onChangeDistrict(value);

  }

  return (
    <div className={styles.Component}>
      <Row gutter={[16, 16]} >
      <Col sm={24} md={12} >
          <Select
            loading={provinceLoading}
            disabled={provinceLoading}
            showSearch
            style={{ width: "100%" }}
            placeholder="Tìm kiếm Tỉnh/Thành phố"
            optionFilterProp="children"
            defaultValue={province}
            value={province}
            onChange={handleChangeProvince}
            filterOption={(input: any, option: any) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA: any, optionB: any) =>
              optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
          >
            {
              provinceList.map((element, index) => {
                return <Option value={element[provincePropertyDefault?.id]} key={index}>{element[provincePropertyDefault?.name]}</Option>
              })
            }

          </Select>
        </Col>
        <Col sm={24} md={12} >
          <Select
            loading={districtLoading}
            disabled={districtLoading}
            showSearch
            style={{ width: "100%" }}
            placeholder="Tìm kiếm Tỉnh/Thành phố"
            optionFilterProp="children"
            defaultValue={district}
            value={district}
            onChange={handleChangeDistrict}
            filterOption={(input: any, option: any) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA: any, optionB: any) =>
              optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
          >
            {
              districtList.map((element, index) => {
                return <Option value={element[districtPropertyDefault?.id]} key={index}>{element[districtPropertyDefault?.name]}</Option>
              })
            }

          </Select>
        </Col>
      </Row>


    </div>
  );
};

export default AddressPicker;
