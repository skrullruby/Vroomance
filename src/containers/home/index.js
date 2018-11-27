import React from 'react';

import CheckBox from '../../components/checkbox';
import Select from '../../components/select';
import FilterButton from '../../components/filterButton';
import RangeSelect from '../../components/rangeSelect';
import ColorCheck from '../../components/colorCheck';

import ranges from '../../contants/ranges';

import './styles.css';

const distanceList = [
  '10 km',
  '20 km',
  '50 km',
  '100 km',
  '400 km',
  'Province',
  'National',
  'North America',
];

const modelList = [
  {
    id: 1,
    name: 'ILX',
    quantity: 1,
  },
  {
    id: 2,
    name: 'MDX',
    quantity: 10,
  },
  {
    id: 3,
    name: 'RDX',
    quantity: 10,
  },
  {
    id: 4,
    name: 'TL',
    quantity: 10,
  },
]

const makeList = [
  {
    id: 1,
    name: 'AC',
    quantity: 10,
  },
  {
    id: 1,
    name: 'Acura',
    quantity: 10,
  },
  {
    id: 1,
    name: 'AC',
    quantity: 10,
  },
  {
    id: 1,
    name: 'Acura',
    quantity: 10,
  },
  {
    id: 1,
    name: 'AC',
    quantity: 10,
  },
  {
    id: 1,
    name: 'Acura',
    quantity: 10,
  },
  {
    id: 1,
    name: 'AC',
    quantity: 10,
  },
  {
    id: 1,
    name: 'Acura',
    quantity: 10,
  },
  {
    id: 1,
    name: 'AC',
    quantity: 10,
  },
  {
    id: 1,
    name: 'Acura',
    quantity: 10,
  },
  {
    id: 1,
    name: 'AC',
    quantity: 10,
  },
  {
    id: 1,
    name: 'Acura',
    quantity: 10,
  },
  {
    id: 1,
    name: 'AC',
    quantity: 10,
  },
  {
    id: 1,
    name: 'Acura',
    quantity: 10,
  },
  {
    id: 1,
    name: 'AC',
    quantity: 10,
  },
  {
    id: 1,
    name: 'Acura',
    quantity: 10,
  },
  {
    id: 1,
    name: 'AC',
    quantity: 10,
  },
  {
    id: 1,
    name: 'Acura',
    quantity: 10,
  },
  {
    id: 1,
    name: 'AC',
    quantity: 10,
  },
  {
    id: 1,
    name: 'Acura',
    quantity: 10,
  },
];

const colorList = [
  {
    name: 'Black',
    quantity: 10,
    value: '#000000',
  },
  {
    name: 'Blue',
    quantity: 2,
    value: '#0970B1',
  },
  {
    name: 'Dark Grey',
    quantity: 2,
    value: '#A1A1A1',
  },
];

const typeList = [
  {
    id: 1,
    name: 'Dealer',
  },
  {
    id: 2,
    name: 'Private',
  },
]

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      stock: new Array(3).fill(false),
      filter: '',
      zipcode: '',
      range: 0,
      distance: -1,
      tempDistance: -1,
      priceMin: -1,
      priceMax: -1,
      tempPriceMin: 1000,
      tempPriceMax: 95000,
      periodFrom: -1,
      periodTo: -1,
      tempPeriodFrom: 2000,
      tempPeriodTo: 2010,
      model: -1,
      tempModel: -1,
      make: -1,
      tempMake: -1,
      color: new Array(colorList.length).fill(false),
      tempColor: new Array(colorList.length).fill(false),
      type: new Array(typeList.length).fill(false),
      tempType: new Array(typeList.length).fill(false),
    };
  }

  onSearch = () => {
    const { history } = this.props;
    console.log(history);
    history.push('/about-us');
  }

  handleStockClick = (index) => {
    const { stock } = this.state;
    stock[index] = !stock[index];
    this.setState({ stock });
  }

  onFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  }

  onZipcodeChange = (e) => {
    this.setState({ zipcode: e.target.value });
  }

  onFilterButtonClick = (index) => {
    console.log(index);
  }

  onClearFilter = (index) => {
    switch (index) {
      case 0:
        this.setState({ tempDistance: -1 });
        break;
      case 1:
        this.setState({
          tempPriceMin: 1000,
          tempPriceMax: 100000,
        });
        break;
      case 2:
        this.setState({
          tempPeriodFrom: 2000,
          tempPeriodTo: 2010,
        });
        break;
      case 3:
        this.setState({
          tempModel: -1,
        });
        break;
      case 4:
        this.setState({
          tempMake: -1,
        });
        break;
      case 5:
        this.setState({
          tempColor: new Array(colorList.length).fill(false),
        });
        break;
      case 6:
        this.setState({
          tempType: new Array(typeList.length).fill(false),
        });
        break;
      default:
        break;
    }
  }

  onApplyFilter = (index) => {
    switch (index) {
      case 0:
        const { tempDistance } = this.state;
        this.setState({ distance: tempDistance });
        break;
      case 1:
        const { tempPriceMin, tempPriceMax } = this.state;
        this.setState({
          priceMin: tempPriceMin,
          priceMax: tempPriceMax,
        });
        break;
      case 2:
        const { tempPeriodFrom, tempPeriodTo } = this.state;
        this.setState({
          periodFrom: tempPeriodFrom,
          periodTo: tempPeriodTo,
        });
        break;
      case 3:
        const { tempModel } = this.state;
        this.setState({
          model: tempModel,
        });
        break;
      case 4:
        const { tempMake } = this.state;
        this.setState({
          make: tempMake,
        });
        break;
      case 5:
        const { tempColor } = this.state;
        this.setState({
          color: [...tempColor],
        });
        break;
      case 6:
        const { tempType } = this.state;
        this.setState({
          type: [...tempType],
        });
        break;
      default:
        break;
    }
  }

  onDistanceClick = (index) => {
    this.setState({ tempDistance: index });
  }

  onPriceChange = (min, max) => {
    this.setState({
      tempPriceMin: min,
      tempPriceMax: max,
    });
  }

  onPeriodChange = (from, to) => {
    this.setState({
      tempPeriodFrom: from,
      tempPeriodTo: to,
    });
  }

  onModelSelect = (index) => {
    this.setState({ tempModel: index });
  }

  onMakeSelect = (index) => {
    this.setState({ tempMake: index });
  }

  onColorSelect = (index) => {
    const { tempColor } = this.state;
    tempColor[index] = !tempColor[index];
    this.setState({ tempColor });
  }

  onTypeSelect = (index) => {
    const { tempType } = this.state;
    tempType[index] = !tempType[index];
    this.setState({ tempType });
  }

  /**
   * Returns an array with arrays of the given size.
   *
   * @param myArray {Array} array to split
   * @param chunk_size {Integer} Size of every group
   */
  chunkArray = (myArray, chunk_size) => {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      const myChunk = myArray.slice(index, index + chunk_size);
      // Do something if you want with the group
      tempArray.push(myChunk);
    }

    return tempArray;
  }

  render() {
    const {
      stock,
      filter,
      zipcode,
      range,
      distance,
      tempDistance,
      priceMax,
      tempPriceMin,
      tempPriceMax,
      periodFrom,
      periodTo,
      tempPeriodFrom,
      tempPeriodTo,
      model,
      tempModel,
      make,
      tempMake,
      color,
      tempColor,
      type,
      tempType,
    } = this.state;
    const stockTypes = [
      'Used Car',
      'New Car',
      'Certified Pre-Owned',
    ];
    const distanceData = this.chunkArray(distanceList, 3);
    const modelData = this.chunkArray(modelList, 2);
    const makeData = this.chunkArray(makeList, 4);
    const activeColors = colorList.filter((col, idx) => color[idx]);
    const colorLabel = activeColors.map(col => col.name).join(' - ');
    const colorFilled = color.reduce((a, b) => a || b, false);
    const activeTypes = typeList.filter((tp, idx) => type[idx]);
    const typeLabel = activeTypes.map(tp => tp.name).join(' - ');
    const typeFilled = type.reduce((a, b) => a || b, false);
    return (
      <div className='home'>
        <div className='title'>
          Shop <span>16 million</span> cars
        </div>
        <div>
          {
            stockTypes.map((stockType, index) => (
              <CheckBox
                key={index}
                checked={stock[index]}
                label={stockType}
                style={{
                  marginLeft: index > 0 ? 50 : 0,
                }}
                onClick={() => { this.handleStockClick(index); }}
              />
            ))
          }
        </div>
        <div className='searchPanel'>
          <div className='searchFilterView'>
            <input
              className='searchFilterInput'
              type='text'
              placeholder='i.e.: used 2016 mersedes c300 coupe black'
              value={filter}
              onChange={this.onFilterChange}
            />
            <span>within</span>
            <Select
              options={ranges}
              selected={range}
              onChange={(index, value) => { this.setState({ range: index }); }}
            />
            <span>of</span>
            <input
              className='searchZipcodeInput'
              type='text'
              placeholder='ZIPCODE'
              value={zipcode}
              onChange={this.onZipcodeChange}
            />
            <div
              className='searchButton'
              onClick={this.onSearch}
            >
              <div className='searchButtonIcon' />
              <span>SEARCH</span>
            </div>
          </div>
          <div className='searchFilterGroup'>
            {/* Kilometres Filter */}
            <FilterButton
              name={distance === -1 ? 'Kilometres' : distanceList[distance]}
              filled={distance !== -1}
              onClear={() => this.onClearFilter(0)}
              onApply={() => this.onApplyFilter(0)}
              detailStyle={{
                display: 'flex',
              }}
            >
              {
                distanceData.map((distanceGroup, idx) => (
                  <div key={idx} className='distanceList'>
                    {
                      distanceGroup.map((dist, idx2) => (
                        <CheckBox
                          key={idx2}
                          label={dist}
                          checked={idx * 3 + idx2 === tempDistance}
                          style={{
                            display: 'block',
                            marginTop: idx2 > 0 ? 20 : 0,
                          }}
                          onClick={() => this.onDistanceClick(idx * 3 + idx2)}
                        />
                      ))
                    }
                  </div>
                ))
              }
            </FilterButton>
            {/* Price Filter */}
            <FilterButton
              name={priceMax === -1 ? 'Price' : `Up to ${priceMax.toLocaleString()} USD`}
              filled={priceMax !== -1}
              onClear={() => this.onClearFilter(1)}
              onApply={() => this.onApplyFilter(1)}
              detailStyle={{
                width: 330,
                textAlign: 'left',
                fontFamily: 'Lato',
                fontWeight: 100,
                fontSize: 16,
                color: '#515355',
              }}
            >
              <div>The average price is $22,300USD</div>
              <RangeSelect
                showHistogram
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                }}
                min={0}
                max={200000}
                left={tempPriceMin}
                right={tempPriceMax}
                step={100}
                onChange={this.onPriceChange}
              />
              <div>$ {tempPriceMin.toLocaleString()} USD - {tempPriceMax.toLocaleString()} USD</div>
            </FilterButton>
            {/* Period Filter */}
            <FilterButton
              name={periodFrom === -1 ? 'Year' : `${periodFrom}-${periodTo}`}
              filled={periodFrom !== -1}
              onClear={() => this.onClearFilter(2)}
              onApply={() => this.onApplyFilter(2)}
              detailStyle={{
                width: 300,
                textAlign: 'left',
                fontFamily: 'Lato',
                fontWeight: 100,
                fontSize: 16,
                color: '#515355',
              }}
            >
              <RangeSelect
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                }}
                min={1997}
                max={2018}
                left={tempPeriodFrom}
                right={tempPeriodTo}
                onChange={this.onPeriodChange}
              />
              <div>{tempPeriodFrom} year - {tempPeriodTo} year</div>
            </FilterButton>
            {/* Model Filter */}
            <FilterButton
              name={model === -1 ? 'Model' : modelList[model].name}
              filled={model !== -1}
              onClear={() => this.onClearFilter(3)}
              onApply={() => this.onApplyFilter(3)}
              detailStyle={{
                display: 'flex',
              }}
            >
              {
                modelData.map((modelGroup, idx) => (
                  <div key={idx} className='modelList'>
                    {
                      modelGroup.map((model, idx2) => (
                        <div
                          key={model.id}
                          style={{
                            display: 'block',
                            padding: 5,
                            borderRadius: 3,
                            marginTop: idx2 > 0 ? 10 : 0,
                            backgroundColor: (idx * 2 + idx2 === tempModel) ? '#DFE7EF' : 'white',
                          }}
                          onClick={() => this.onModelSelect(idx * 2 + idx2)}
                        >
                          {model.name} {model.quantity !== 1 && `(${model.quantity})`}
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </FilterButton>
            {/* Make Filter */}
            <FilterButton
              name={make === -1 ? 'Make' : makeList[make].name}
              filled={make !== -1}
              onClear={() => this.onClearFilter(4)}
              onApply={() => this.onApplyFilter(4)}
              detailStyle={{
                display: 'flex',
              }}
            >
              {
                makeData.map((makeGroup, idx) => (
                  <div key={idx} className='makeList'>
                    {
                      makeGroup.map((make, idx2) => (
                        <div
                          key={idx2}
                          style={{
                            display: 'block',
                            padding: 5,
                            borderRadius: 3,
                            marginTop: idx2 > 0 ? 10 : 0,
                            backgroundColor: (idx * 4 + idx2 === tempMake) ? '#DFE7EF' : 'white',
                          }}
                          onClick={() => this.onMakeSelect(idx * 4 + idx2)}
                        >
                          {make.name} {make.quantity !== 1 && `(${make.quantity})`}
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </FilterButton>
            {/* Colour Filter */}
            <FilterButton
              name={colorFilled ? colorLabel : 'Colour'}
              filled={colorFilled}
              onClear={() => this.onClearFilter(5)}
              onApply={() => this.onApplyFilter(5)}
            >
              {
                colorList.map((color, idx) => (
                  <ColorCheck
                    key={idx}
                    checked={tempColor[idx]}
                    color={color}
                    onSelect={() => this.onColorSelect(idx)}
                    style={{
                      marginTop: idx > 0 ? 20 : 0,
                    }}
                  />
                ))
              }
            </FilterButton>
            {/* Type Filter */}
            <FilterButton
              name={typeFilled ? typeLabel : 'Type'}
              filled={typeFilled}
              onClear={() => this.onClearFilter(6)}
              onApply={() => this.onApplyFilter(6)}
              detailStyle={{
                textAlign: 'left',
              }}
            >
              {
                typeList.map((item, idx) => (
                  <CheckBox
                    key={idx}
                    checked={tempType[idx]}
                    label={item.name}
                    onClick={() => this.onTypeSelect(idx)}
                    style={{
                      marginTop: idx > 0 ? 20 : 0,
                      display: 'block',
                    }}
                  />
                ))
              }
            </FilterButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;