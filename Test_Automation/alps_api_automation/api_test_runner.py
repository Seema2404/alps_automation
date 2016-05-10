import HTMLTestRunner
import unittest
import api_projectkeyword
import api_projectkeyworddetail
import api_projectkeywordestimated
import api_projectkeywordsrollup
import api_projectkeywordthemes
import api_projectpagecontentdetail_on_page
import api_projectthemegraph

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

        suite.addTests(unittest.makeSuite(api_projectkeyword.ProjectKeywordAPI))
        suite.addTests(unittest.makeSuite(api_projectkeyworddetail.ProjectKeywordDetailAPI))
        suite.addTests(unittest.makeSuite(api_projectkeywordestimated.TestProjectKeywordEstimated))
        suite.addTests(unittest.makeSuite(api_projectkeywordthemes.TestProjectKeywordThemes))
        suite.addTest(unittest.makeSuite(api_projectkeywordsrollup.TestProjectKeywordRollup))
        suite.addTest(unittest.makeSuite(api_projectpagecontentdetail_on_page.TestProjectPageContentDetails))
        suite.addTest(unittest.makeSuite(api_projectthemegraph.ProjectThemeGraphAPI))

        runner.run(suite)

    if __name__ == '__main__':
        test();