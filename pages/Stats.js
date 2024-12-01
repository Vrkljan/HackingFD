const Stats = () => {
    const stats = [
      {
        title: 'Current Strength',
        value: '84%',
        subValue: '505 / 605',
        color: 'text-green-400',
      },
      {
        title: 'Average Age of Candidate',
        value: '27 Years',
        subValue: 'Comparative Average of CAF: 31 Years',
      },
      {
        title: 'Average Time to OFP',
        value: '1.5 Years',
        subValue: 'Comparative Average of CAF: 2.4 Years',
      },
      {
        title: 'Average Time in Training',
        value: '1.1 Years',
      },
      {
        title: 'Average Cost to Train',
        value: '$637k',
      },
    ];
  
    return (
      <>
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded text-center space-y-2"
          >
            <p className={`text-xl font-bold ${stat.color || ''}`}>{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.title}</p>
            {stat.subValue && <p className="text-xs">{stat.subValue}</p>}
          </div>
        ))}
      </>
    );
  };
  
  export default Stats;
  