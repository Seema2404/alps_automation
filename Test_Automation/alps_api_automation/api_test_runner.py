import HTMLTestRunner
import api_projectkeywordestimated
import unittest
import api_projectkeywordestimated_updated

class TestRunner:

    def __init__(self):
        print "TestRunner.__INIT__"
    #This is to launch tests and run tests for the desired plan
    def test(args=None):

        fp = file('/home/10613/Downloads/unittest-xml-reporting-2.1.0/test_result.html', 'wb')
        runner = HTMLTestRunner.HTMLTestRunner(
            stream=fp,
            title='API boundary tests',
            description='This test result gives the details of the test runs of all the boundary value assertions.'
        )


        suite = unittest.TestSuite()

        #suite.addTests(unittest.makeSuite(api_projectkeywordestimated.TestBoundaryValues))
        suite.addTest(unittest.makeSuite(api_projectkeywordestimated_updated.TestAPIProjectKeywordEstimated))

        runner.run(suite)

    if __name__ == '__main__':
        test();