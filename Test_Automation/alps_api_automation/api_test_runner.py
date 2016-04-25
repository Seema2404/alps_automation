import HTMLTestRunner
import api_projectkeywordestimated
import unittest
import api_projectkeywordsrollup
import api_projectpagecontentdetail_on_page

class TestRunner:

    def __init__(self):
        print "api_test_runner.__INIT__"
    #This is to launch tests and run tests for the desired plan
    def test(args=None):

        fp = file('REPORT_FILE_NAME.html', 'wb')
        runner = HTMLTestRunner.HTMLTestRunner(
            stream=fp,
            title='API boundary tests',
            description='This test result gives the details of the test runs of all the boundary value assertions.'
        )


        suite = unittest.TestSuite()

        #suite.addTests(unittest.makeSuite(api_projectkeywordestimated.TestBoundaryValues))
        suite.addTest(unittest.makeSuite(api_projectkeywordsrollup.TestProjectKeywordRollup))
        suite.addTest(unittest.makeSuite(api_projectpagecontentdetail_on_page.TestProjectPageContentDetails))


        runner.run(suite)

    if __name__ == '__main__':
        test();