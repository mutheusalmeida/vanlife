import { formatCurrency, getMonth } from '@/resources/utils'
import { Title } from '@/title'
import {
  Bar,
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryContainer,
} from 'victory'

const data = [
  { month: 2, earnings: 4300 },
  { month: 3, earnings: 1000 },
  { month: 4, earnings: 1050 },
  { month: 5, earnings: 7800 },
  { month: 6, earnings: 2400 },
  { month: 7, earnings: 5700 },
]

export const Income = () => {
  const labelStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: 18,
    fontWeight: 500,
    fill: '#4D4D4D',
    textAnchor: 'middle',
  }

  const axisStyle = {
    stroke: 'transparent',
    strokeWidth: 0,
  }

  const rates = data.map((item) => Math.floor(Math.log10(item.earnings)) + 1)
  const rate = Math.max(...rates)

  const getTickFormat = (value: number, rate: number) => {
    const format =
      rate >= 7 ? value / 1000000 : rate >= 4 ? value / 1000 : value
    const sufix = rate >= 7 ? 'm' : rate >= 4 ? 'k' : ''

    return `$${format}${sufix}`
  }

  return (
    <div className="px-4 pb-11">
      <div className="container mx-auto max-w-4xl">
        <Title heading="h2" className="mb-9 text-3xl font-bold">
          Income
        </Title>

        <p className="mb-7 font-medium text-black-100">
          Last <span className="font-bold underline">30 days</span>
        </p>

        <Title heading="h3" className="mb-12 text-5xl">
          {formatCurrency(2260, { maximumFractionDigits: 0 })}
        </Title>

        <VictoryChart
          containerComponent={<VictoryContainer className="max-w-[493px]" />}
          domainPadding={{ x: [30, 36] }}
          domain={{
            y: [
              0,
              Math.max(...data.map((item) => item.earnings)) +
                (rate >= 7 ? 1000000 : rate >= 4 ? 1000 : 100),
            ],
          }}
          padding={{ left: 64, right: 0, bottom: 40, top: 8 }}
        >
          <VictoryAxis
            tickValues={[...data.map((item) => item.month)]}
            tickFormat={[...data.map((item) => getMonth(item.month))]}
            style={{
              tickLabels: { ...labelStyle, fontSize: 23 },
              axis: axisStyle,
            }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => getTickFormat(x, rate)}
            offsetX={12}
            style={{
              tickLabels: { ...labelStyle, textAnchor: 'start' },
              grid: {
                stroke: '#B9B9B9',
                strokeDasharray: 16,
                strokeDashoffset: 4,
                strokeWidth: 1,
              },
              axis: axisStyle,
            }}
          />

          <VictoryBar
            dataComponent={
              <Bar className="!fill-orange-200 !stroke-orange-200" />
            }
            barWidth={38}
            alignment="middle"
            data={data}
            x="month"
            y="earnings"
            cornerRadius={{ topLeft: 4, topRight: 4 }}
          />
        </VictoryChart>
      </div>
    </div>
  )
}
