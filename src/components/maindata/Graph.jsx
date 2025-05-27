import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";

import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

import chartData from "./energy-acquisition";

import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import AOS from "aos";
import "aos/dist/aos.css";

const status = [
  {
    value: 1,
    label: "Today",
  },
  {
    value: 2,
    label: "This Month",
  },
  {
    value: 3,
    label: "This Year",
  },
];

const Graph = ({ isLoading }) => {
  const [value, setValue] = useState(status[0]);

  const [series, setSeries] = useState(chartData.seriesDay);
  const [totalUsage, setTotalUsage] = useState("$2,324.00");

  const { primary } = "#FEA803"; //sunshare yellow
  // const darkLight = "#fff"; //white
  const grey200 = "#EEEEEE"; //light grey
  const grey500 = "#9E9E9E"; //darker grey

  const primary200 = "#4797dd"; //light blue
  const primaryDark = "#7BA538"; //sunshare green
  const secondaryMain = "#0D527C"; //darker blue
  const secondaryLight = "#197dd2"; //blue

  useEffect(() => {
    AOS.init();

    const newChartData = {
      ...chartData.options,
      colors: [primary200, primaryDark, secondaryMain, secondaryLight],
      xaxis: {
        labels: {
          style: {
            colors: [
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
            ],
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary],
          },
        },
      },
      grid: {
        borderColor: grey200,
      },
      tooltip: {
        theme: "light",
      },
      legend: {
        labels: {
          colors: grey500,
        },
      },
    };
    // do not load chart when loading
    if (!isLoading) {
      ApexCharts.exec("line-chart", "updateOptions", { newChartData });
    }
  }, [isLoading]);

  function classDate(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function handleClick(data) {
    switch (data) {
      case 1:
        setSeries(chartData.seriesDay);
        setTotalUsage("$2,324.00");

        break;
      case 2:
        setSeries(chartData.seriesMonth);
        setTotalUsage("$13,368.00");
        break;
      case 3:
        setSeries(chartData.seriesYear);
        setTotalUsage("$25,011.00");
        break;
      default:
        break;
    }
  }

  return (
    <React.Fragment>
      {isLoading ? (
        <div class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="flex space-x-4 animate-pulse">
            <div class="flex-1 py-1 space-y-4">
              <div class="w-full h-40 bg-gray-400 rounded"></div>
              <div class="space-y-2">
                <div class="h-4 bg-gray-400 rounded"></div>
                <div class="w-5/6 h-4 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div
            className="sectionIntro text-center text-white py-16 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            data-aos="fade-down"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            <h2>Sunshare Market Performance</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div
            className="rounded-2xl pt-3.5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-white"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            <div className="grid grid-cols-1">
              <div className="rounded-2xl pt-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-white">
                <div className="graph-price mx-10 flex justify-between">
                  <div className="text-left">
                    <h4>Current Price</h4>
                    <h6>{totalUsage}</h6>
                  </div>
                  <div className="z-20 w-36">
                    <Listbox value={value} onChange={setValue}>
                      {({ open }) => (
                        <>
                          <div className="relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm">
                              <span className="flex items-center">
                                <span className="ml-3 block truncate">
                                  {value.label}
                                </span>
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            >
                              <Listbox.Options
                                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                onChange={handleClick(value.value)}
                              >
                                {status.map((status) => (
                                  <Listbox.Option
                                    key={status.value}
                                    className={({ active }) =>
                                      classDate(
                                        active
                                          ? "text-white bg-[#FEA803]"
                                          : "text-gray-900",
                                        "relative cursor-default select-none py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={status}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <div className="flex items-center">
                                          <span
                                            className={classDate(
                                              selected
                                                ? "font-semibold"
                                                : "font-normal",
                                              "ml-3 block truncate"
                                            )}
                                          >
                                            {status.label}
                                          </span>
                                        </div>

                                        {selected ? (
                                          <span
                                            className={classDate(
                                              active
                                                ? "text-white"
                                                : "text-[#FEA803]",
                                              "absolute inset-y-0 right-0 flex items-center pr-4"
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                </div>
                <div className="w-[95%] m-auto">
                  <Chart
                    options={chartData.options}
                    series={series}
                    type={chartData.type}
                    height={chartData.height}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

Graph.propTypes = {
  isLoading: PropTypes.bool,
};

export default Graph;
