module.exports.handler = async (event) => {
  console.log(new Date() + " Second Last Session Of Cohort 4")
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Helllo AKB ==> THIS IS OUR HTTP RESPONSE",
        },
        null,
        2
      ),
    };
  };