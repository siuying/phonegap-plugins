//
//  AudioEncode.h
//
//  By Lyle Pratt, September 2011.
//  MIT licensed
//

#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>

#ifdef CORDOVA_FRAMEWORK
    #import <Cordova/CDVPlugin.h>
#else
    #import "CDVPlugin.h"
#endif

@interface AudioEncode : CDVPlugin {
    NSString* successCallback;
    NSString* failCallback;
}

@property (nonatomic, retain) NSString* successCallback;
@property (nonatomic, retain) NSString* failCallback;

- (void)encodeAudio:(NSArray*)arguments withDict:(NSDictionary*)options;
@end
