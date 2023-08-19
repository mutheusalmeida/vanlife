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
  { month: 2, earnings: 7400 },
  { month: 3, earnings: 2600 },
  { month: 4, earnings: 1100 },
  { month: 5, earnings: 1300 },
  { month: 6, earnings: 1600 },
  { month: 7, earnings: 1250 },
]

export const Income = () => {
  const increaseRate = Math.max(
    ...data.map((item) =>
      Math.ceil(
        Math.floor((Math.floor(item.earnings / 1000) * 1000) / data.length) /
          1000
      )
    )
  )

  const max = Math.max(
    ...data.map((item) => Math.floor(item.earnings / 1000) * 1000)
  )

  const earnings = [
    ...Array(data.length)
      .fill(0)
      .reduce<number[]>(
        (acc: number[], curr: number, index) => {
          const newValue = curr + increaseRate * (index + 1) * 1000
          const limitValue = max + increaseRate * 1000

          if (!acc.includes(newValue)) {
            if (newValue >= limitValue) {
              return acc
            } else {
              return [...acc, newValue]
            }
          } else {
            return acc
          }
        },
        [0]
      )
      .filter((item) => item > -1)
      .sort((a, b) => a - b),
  ]

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
            tickValues={earnings}
            tickFormat={(x) => `$${x / 1000}k`}
            offsetX={36}
            style={{
              tickLabels: labelStyle,
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
